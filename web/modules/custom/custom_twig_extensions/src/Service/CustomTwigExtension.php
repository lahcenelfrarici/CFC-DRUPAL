<?php

/**
 * @file
 * Contains \Drupal\custom_twig_extensions\Service.
 */

namespace Drupal\custom_twig_extensions\Service;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;
use \Drupal\taxonomy\Entity\Term;
use Drupal\views\Views;


class CustomTwigExtension extends AbstractExtension
{

    /**
     * {@inheritdoc}
     * This function must return the name of the extension. It must be unique.
     */
    public function getName()
    {
        return 'custom_twig_extension';
    }

    /**
     * In this function we can declare the extension function
     */
    public function getFunctions()
    {

        return [
            new TwigFunction('get_translated_entity', [$this, 'getTranslatedEntity']),
            new TwigFunction('are_paragraph_fields_empty', [$this, 'areParagraphFieldsEmpty']),
        ];
    }


    /**
     * Retrieves the translated entity for a given type, ID, and language code.
     *
     * @param string $entity
     *   The entity type ('node', 'taxonomy', 'paragraph').
     * @param int $id
     *   The entity ID.
     * @param string $code_lang
     *   The language code for the translation.
     *
     * @return \Drupal\Core\Entity\ContentEntityInterface|null
     *   The translated entity or null if not available.
     */

    public function getTranslatedEntity($entity, $id, $code_lang)
    {
        $translated_entity = null;
        if ($entity == 'node') {
            $node = \Drupal\node\Entity\Node::load($id);
            if ($node->hasTranslation($code_lang)) {
                $translated_entity = $node->getTranslation($code_lang);
            }
        } elseif ($entity == 'taxonomy') {
            $taxo = \Drupal\taxonomy\Entity\Term::load($id);
            if ($taxo) {
                if ($taxo->hasTranslation($code_lang)) {
                    $translated_entity = $taxo->getTranslation($code_lang);
                }
            }
        } elseif ($entity == 'paragraph') {
            $parag = \Drupal\paragraphs\Entity\Paragraph::load($id);
            if ($parag) {
                if ($parag->hasTranslation($code_lang)) {
                    $translated_entity = $parag->getTranslation($code_lang);
                }
            }
        }

        return $translated_entity;
    }

    /**
     * Checks if all fields of a paragraph are empty.
     *
     * @param \Drupal\paragraphs\Entity\Paragraph $paragraph
     *   The ID of the paragraph.
     * @param string $language_id
     *   The language ID.
     *
     * @return bool
     *   TRUE if all fields are empty, FALSE otherwise.
     */
    public function areParagraphFieldsEmpty($paragraph, $language_id) {
        if (!$paragraph) {
            return TRUE;
        }
        
        if ($paragraph) {
            $custom_fields = $this->getCustomFields($paragraph);

            foreach ($custom_fields as $field_name => $field) {
                if (!$field->isEmpty()) {
                    return FALSE;
                }
            }
        }
        return TRUE;
    }

    /**
     * Get custom fields of a paragraph entity.
     *
     * @param \Drupal\paragraphs\Entity\Paragraph $paragraph
     *   The paragraph entity.
     *
     * @return array
     *   An array of custom fields.
     */
    protected function getCustomFields($paragraph) {
        $custom_fields = [];
        $field_definitions = $paragraph->getFieldDefinitions();
    
        foreach ($field_definitions as $field_name => $field_definition) {
            if (strpos($field_name, 'field_') === 0) {
                $custom_fields[$field_name] = $paragraph->get($field_name);
            }
        }
    
        return $custom_fields;
    }
}
