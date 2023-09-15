export type ArtworkListApiRequestType = {
  pagination: {
    total: number
    limit: number
    offset: number
    total_pages: number
    current_page: number
    next_url: string
  }
  data: ArtworkListItemType[]
  info: {
    license_text: string
    license_links: string[]
    version: string
  }
  config: {
    iiif_url: string
    website_url: string
  }
}

export type ArtworkListItemType = {
  id: number
  title: string
  image_id: string
}

export const ArtworkListItemQueryFields = 'id,title,image_id,'

export type ArtworkDetailsApiRequestType = {
  data: ArtworkDetailsType
  info: {
    license_text: string
    license_links: string[]
    version: string
  }
  config: {
    iiif_url: string
    website_url: string
  }
}

export type ArtworkDetailsType = {
  id: number
  title: string
  image_id: string
  artist_display: string
  department_title: string
}

export const ArtworkDetailsQueryFields = 'id,title,image_id,artist_display,department_title'

export type Artwork = {
  id: number
  api_model: string
  api_link: string
  is_boosted: boolean
  title: string
  alt_titles: string[]
  thumbnail: {
    // Define the structure of the thumbnail object
    // You can add more properties here if needed
    // For example: width: number; height: number;
    // Note: The exact structure of the thumbnail object is not provided in the original description.
  }
  main_reference_number: string
  has_not_been_viewed_much: boolean
  boost_rank: number
  date_start: number
  date_end: number
  date_display: string
  date_qualifier_title: string
  date_qualifier_id: number
  artist_display: string
  place_of_origin: string
  dimensions: string
  dimensions_detail: {
    // Define the structure of the dimensions_detail object
    // You can add properties like height, width, depth, diameter as needed.
    // For example: height: number; width: number; depth: number;
  }
  medium_display: string
  inscriptions: string
  credit_line: string
  catalogue_display: string
  publication_history: string
  exhibition_history: string
  provenance_text: string
  edition: string
  publishing_verification_level: string
  internal_department_id: number
  fiscal_year: number
  fiscal_year_deaccession: number
  is_public_domain: boolean
  is_zoomable: boolean
  max_zoom_window_size: number
  copyright_notice: string
  has_multimedia_resources: boolean
  has_educational_resources: boolean
  has_advanced_imaging: boolean
  colorfulness: number
  color: {
    // Define the structure of the color object
    // You can add properties like hue, saturation, lightness as needed.
    // For example: hue: number; saturation: number; lightness: number;
  }
  latitude: number
  longitude: number
  latlon: string
  is_on_view: boolean
  on_loan_display: string
  gallery_title: string
  gallery_id: number
  artwork_type_title: string
  artwork_type_id: number
  department_title: string
  department_id: number
  artist_id: number
  artist_title: string
  alt_artist_ids: number[]
  artist_ids: number[]
  artist_titles: string[]
  category_ids: number[]
  category_titles: string[]
  term_titles: string[]
  style_id: string
  style_title: string
  alt_style_ids: string[]
  style_ids: string[]
  style_titles: string[]
  classification_id: string
  classification_title: string
  alt_classification_ids: string[]
  classification_ids: string[]
  classification_titles: string[]
  subject_id: string
  alt_subject_ids: string[]
  subject_ids: string[]
  subject_titles: string[]
  material_id: string
  alt_material_ids: string[]
  material_ids: string[]
  material_titles: string[]
  technique_id: string
  alt_technique_ids: string[]
  technique_ids: string[]
  technique_titles: string[]
  theme_titles: string[]
  image_id: string
  alt_image_ids: string[]
  document_ids: string[]
  sound_ids: string[]
  video_ids: string[]
  text_ids: string[]
  section_ids: string[]
  section_titles: string[]
  site_ids: string[]
  suggest_autocomplete_boosted: {
    // Define the structure of the suggest_autocomplete_boosted object
    // You can add properties as needed.
  }
  suggest_autocomplete_all: {
    // Define the structure of the suggest_autocomplete_all object
    // You can add properties as needed.
  }
  source_updated_at: string
  updated_at: string
  timestamp: string
}
