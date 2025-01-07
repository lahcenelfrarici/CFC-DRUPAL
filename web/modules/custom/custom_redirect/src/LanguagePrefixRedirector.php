<?php

namespace Drupal\custom_redirect;

use Drupal\Core\Language\LanguageManagerInterface;
use Drupal\Core\Routing\RouteMatchInterface;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class LanguagePrefixRedirector implements EventSubscriberInterface {

  protected $languageManager;
  protected $routeMatch;

  public function __construct(LanguageManagerInterface $language_manager, RouteMatchInterface $route_match) {
    $this->languageManager = $language_manager;
    $this->routeMatch = $route_match;
  }

  public static function getSubscribedEvents() {
    return [
      KernelEvents::REQUEST => ['checkLanguagePrefix', 28],
    ];
  }

  public function checkLanguagePrefix(RequestEvent $event) {
    $request = $event->getRequest();
    $path = $request->getPathInfo();

    // Get configured languages
    $languages = $this->languageManager->getLanguages();
    $defaultLanguage = $this->languageManager->getDefaultLanguage();

    // Check if the path starts with a valid language prefix
    $hasValidPrefix = false;
    foreach ($languages as $langcode => $language) {
      if (strpos($path, '/' . $langcode . '/') === 0) {
        $hasValidPrefix = true;
        break;
      }
    }

    // If no valid prefix, check if the path is valid and add default language prefix
    if (!$hasValidPrefix) {
      $pathWithoutLeadingSlash = ltrim($path, '/');
      $pathWithDefaultPrefix = '/' . $defaultLanguage->getId() . '/' . $pathWithoutLeadingSlash;
      // Check if the path with default prefix is a valid route
      if ($this->isValidRoute($pathWithDefaultPrefix)) {
        $event->setResponse(new RedirectResponse($pathWithDefaultPrefix));
      }
    }
  }

  protected function isValidRoute($path) {
    // Use Drupal's routing system to check if the path is valid
    try {
      \Drupal::service('router.no_access_checks')->match($path);
      return TRUE;
    }
    catch (\Exception $e) {
      return FALSE;
    }
  }
}
