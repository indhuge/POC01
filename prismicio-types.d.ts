// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type BlogPostDocumentDataSlicesSlice =
  | PostTitleSliceSlice
  | PostImageSliceSlice;

/**
 * Content for Blog Post documents
 */
interface BlogPostDocumentData {
  /**
   * Main Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.main_image
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  main_image: prismic.ImageField<never>;

  /**
   * Post Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.post_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  post_title: prismic.KeyTextField;

  /**
   * Post Author field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.post_author
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  post_author: prismic.KeyTextField;

  /**
   * Publish Date field in *Blog Post*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.publish_date
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  publish_date: prismic.DateField;

  /**
   * Slice Zone field in *Blog Post*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<BlogPostDocumentDataSlicesSlice>
  /**
   * Meta Description field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: blog_post.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Blog Post*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: blog_post.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Blog Post*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: blog_post.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Blog Post document from Prismic
 *
 * - **API ID**: `blog_post`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type BlogPostDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<BlogPostDocumentData>,
    "blog_post",
    Lang
  >;

/**
 * Item in *homepage → menuItens*
 */
export interface HomepageDocumentDataMenuitensItem {
  /**
   * Link Title field in *homepage → menuItens*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.menuitens[].link_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_title: prismic.KeyTextField;

  /**
   * link field in *homepage → menuItens*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.menuitens[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Item in *homepage → Content Menu Options*
 */
export interface HomepageDocumentDataContentMenuOptionsItem {
  /**
   * Link Title field in *homepage → Content Menu Options*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.content_menu_options[].link_title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  link_title: prismic.KeyTextField;

  /**
   * Link field in *homepage → Content Menu Options*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.content_menu_options[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Item in *homepage → Social Links*
 */
export interface HomepageDocumentDataSocialLinksItem {
  /**
   * icon field in *homepage → Social Links*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.social_links[].icon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  icon: prismic.ImageField<never>;

  /**
   * Link field in *homepage → Social Links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.social_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

type HomepageDocumentDataSlicesSlice =
  | WelcomeSliceSlice
  | CardsSlice
  | NewsletterSlotSlice
  | ContactFormSliceSlice;

/**
 * Content for homepage documents
 */
interface HomepageDocumentData {
  /**
   * logo field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * menuItens field in *homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.menuitens[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menuitens: prismic.GroupField<Simplify<HomepageDocumentDataMenuitensItem>>;

  /**
   * Call To Action Text field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.call_to_action_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  call_to_action_text: prismic.KeyTextField;

  /**
   * Menu Footer Title field in *homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.menu_footer_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  menu_footer_title: prismic.RichTextField;

  /**
   * Content Footer Title field in *homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.content_footer_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content_footer_title: prismic.RichTextField;

  /**
   * Content Menu Options field in *homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.content_menu_options[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  content_menu_options: prismic.GroupField<
    Simplify<HomepageDocumentDataContentMenuOptionsItem>
  >;

  /**
   * Phone Number field in *homepage*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.phone_number
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  phone_number: prismic.TitleField;

  /**
   * Email IndHuge field in *homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  email: prismic.RichTextField;

  /**
   * Social footer title field in *homepage*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.social_footer_title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  social_footer_title: prismic.RichTextField;

  /**
   * Social Links field in *homepage*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.social_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  social_links: prismic.GroupField<
    Simplify<HomepageDocumentDataSocialLinksItem>
  >;

  /**
   * Copyright Text field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.copyright_text
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  copyright_text: prismic.KeyTextField;

  /**
   * Slice Zone field in *homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>
  /**
   * Meta Description field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: homepage.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *homepage*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: homepage.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

export type AllDocumentTypes = BlogPostDocument | HomepageDocument;

/**
 * Primary content in *Cards → Primary*
 */
export interface CardsSliceDefaultPrimary {
  /**
   * mainTitle field in *Cards → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards.primary.maintitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  maintitle: prismic.RichTextField;

  /**
   * mainText field in *Cards → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards.primary.maintext
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  maintext: prismic.RichTextField;
}

/**
 * Primary content in *Cards → Items*
 */
export interface CardsSliceDefaultItem {
  /**
   * cardIcon field in *Cards → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: cards.items[].cardicon
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  cardicon: prismic.ImageField<never>;

  /**
   * cardTitle field in *Cards → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards.items[].cardtitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cardtitle: prismic.RichTextField;

  /**
   * cardText field in *Cards → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: cards.items[].cardtext
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  cardtext: prismic.RichTextField;
}

/**
 * Default variation for Cards Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CardsSliceDefaultPrimary>,
  Simplify<CardsSliceDefaultItem>
>;

/**
 * Slice variation for *Cards*
 */
type CardsSliceVariation = CardsSliceDefault;

/**
 * Cards Shared Slice
 *
 * - **API ID**: `cards`
 * - **Description**: Cards
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CardsSlice = prismic.SharedSlice<"cards", CardsSliceVariation>;

/**
 * Primary content in *ContactFormSlice → Primary*
 */
export interface ContactFormSliceSliceDefaultPrimary {
  /**
   * Titulo de Ação field in *ContactFormSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_slice.primary.actionTitle
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  actionTitle: prismic.RichTextField;

  /**
   * Main Title field in *ContactFormSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_slice.primary.main_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  main_title: prismic.RichTextField;

  /**
   * Text Body field in *ContactFormSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_slice.primary.text_body
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text_body: prismic.RichTextField;

  /**
   * Forms Title field in *ContactFormSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_slice.primary.forms_title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  forms_title: prismic.RichTextField;

  /**
   * Name Placeholder field in *ContactFormSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_slice.primary.name_placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name_placeholder: prismic.KeyTextField;

  /**
   * Email Placeholder field in *ContactFormSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_slice.primary.email_placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email_placeholder: prismic.KeyTextField;

  /**
   * Phone Placeholder field in *ContactFormSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_slice.primary.phone_placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  phone_placeholder: prismic.KeyTextField;

  /**
   * Message Placeholder field in *ContactFormSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_slice.primary.message_placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  message_placeholder: prismic.KeyTextField;

  /**
   * Contact Options Placeholder field in *ContactFormSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_slice.primary.contact_placeholder
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  contact_placeholder: prismic.KeyTextField;

  /**
   * Contact Options field in *ContactFormSlice → Primary*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_slice.primary.contact_options
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  contact_options: prismic.SelectField<
    "small_company" | "medium_company" | "big_company"
  >;

  /**
   * Send Button Text field in *ContactFormSlice → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_form_slice.primary.send_button_text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  send_button_text: prismic.KeyTextField;
}

/**
 * Default variation for ContactFormSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactFormSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactFormSlice*
 */
type ContactFormSliceSliceVariation = ContactFormSliceSliceDefault;

/**
 * ContactFormSlice Shared Slice
 *
 * - **API ID**: `contact_form_slice`
 * - **Description**: ContactFormSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactFormSliceSlice = prismic.SharedSlice<
  "contact_form_slice",
  ContactFormSliceSliceVariation
>;

/**
 * Primary content in *NewsletterSlot → Primary*
 */
export interface NewsletterSlotSliceDefaultPrimary {
  /**
   * mainText field in *NewsletterSlot → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter_slot.primary.maintext
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  maintext: prismic.RichTextField;

  /**
   * placeholderText field in *NewsletterSlot → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter_slot.primary.placeholdertext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  placeholdertext: prismic.KeyTextField;

  /**
   * buttonText field in *NewsletterSlot → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: newsletter_slot.primary.buttontext
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  buttontext: prismic.KeyTextField;
}

/**
 * Default variation for NewsletterSlot Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSlotSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<NewsletterSlotSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *NewsletterSlot*
 */
type NewsletterSlotSliceVariation = NewsletterSlotSliceDefault;

/**
 * NewsletterSlot Shared Slice
 *
 * - **API ID**: `newsletter_slot`
 * - **Description**: NewsletterSlot
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type NewsletterSlotSlice = prismic.SharedSlice<
  "newsletter_slot",
  NewsletterSlotSliceVariation
>;

/**
 * Primary content in *PostImageSlice → Items*
 */
export interface PostImageSliceSliceDefaultItem {
  /**
   * image field in *PostImageSlice → Items*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: post_image_slice.items[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;

  /**
   * Image Legend field in *PostImageSlice → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post_image_slice.items[].image_legend
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  image_legend: prismic.KeyTextField;
}

/**
 * Default variation for PostImageSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PostImageSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Record<string, never>,
  Simplify<PostImageSliceSliceDefaultItem>
>;

/**
 * Slice variation for *PostImageSlice*
 */
type PostImageSliceSliceVariation = PostImageSliceSliceDefault;

/**
 * PostImageSlice Shared Slice
 *
 * - **API ID**: `post_image_slice`
 * - **Description**: PostImageSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PostImageSliceSlice = prismic.SharedSlice<
  "post_image_slice",
  PostImageSliceSliceVariation
>;

/**
 * Primary content in *PostContentSlice → Primary*
 */
export interface PostTitleSliceSliceDefaultPrimary {
  /**
   * Title field in *PostContentSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post_title_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.RichTextField;
}

/**
 * Primary content in *PostContentSlice → Items*
 */
export interface PostTitleSliceSliceDefaultItem {
  /**
   * Content field in *PostContentSlice → Items*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: post_title_slice.items[].content
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  content: prismic.RichTextField;
}

/**
 * Default variation for PostContentSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PostTitleSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<PostTitleSliceSliceDefaultPrimary>,
  Simplify<PostTitleSliceSliceDefaultItem>
>;

/**
 * Slice variation for *PostContentSlice*
 */
type PostTitleSliceSliceVariation = PostTitleSliceSliceDefault;

/**
 * PostContentSlice Shared Slice
 *
 * - **API ID**: `post_title_slice`
 * - **Description**: PostTitleSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type PostTitleSliceSlice = prismic.SharedSlice<
  "post_title_slice",
  PostTitleSliceSliceVariation
>;

/**
 * Primary content in *WelcomeSlice → Primary*
 */
export interface WelcomeSliceSliceDefaultPrimary {
  /**
   * title field in *WelcomeSlice → Primary*
   *
   * - **Field Type**: Title
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome_slice.primary.title
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  title: prismic.TitleField;

  /**
   * text field in *WelcomeSlice → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome_slice.primary.text
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  text: prismic.RichTextField;

  /**
   * mainImage field in *WelcomeSlice → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome_slice.primary.mainimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  mainimage: prismic.ImageField<never>;

  /**
   * backgroundImage field in *WelcomeSlice → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: welcome_slice.primary.backgroundimage
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  backgroundimage: prismic.ImageField<never>;
}

/**
 * Default variation for WelcomeSlice Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WelcomeSliceSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<WelcomeSliceSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *WelcomeSlice*
 */
type WelcomeSliceSliceVariation = WelcomeSliceSliceDefault;

/**
 * WelcomeSlice Shared Slice
 *
 * - **API ID**: `welcome_slice`
 * - **Description**: WelcomeSlice
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type WelcomeSliceSlice = prismic.SharedSlice<
  "welcome_slice",
  WelcomeSliceSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      BlogPostDocument,
      BlogPostDocumentData,
      BlogPostDocumentDataSlicesSlice,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      AllDocumentTypes,
      CardsSlice,
      CardsSliceVariation,
      CardsSliceDefault,
      ContactFormSliceSlice,
      ContactFormSliceSliceVariation,
      ContactFormSliceSliceDefault,
      NewsletterSlotSlice,
      NewsletterSlotSliceVariation,
      NewsletterSlotSliceDefault,
      PostImageSliceSlice,
      PostImageSliceSliceVariation,
      PostImageSliceSliceDefault,
      PostTitleSliceSlice,
      PostTitleSliceSliceVariation,
      PostTitleSliceSliceDefault,
      WelcomeSliceSlice,
      WelcomeSliceSliceVariation,
      WelcomeSliceSliceDefault,
    };
  }
}
