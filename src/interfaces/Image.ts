export interface ImageInterface {
  id: string;
  slug: string;
  alternative_slugs: AlternativeSlugs;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: Urls;
  links: WelcomeLinks;
  likes: number;
  liked_by_user: boolean;
  sponsorship: null;
  topic_submissions: TopicSubmissions;
  asset_type: string;
  user: User;
}

export interface AlternativeSlugs {
  en: string;
  es: string;
  ja: string;
  fr: string;
  it: string;
  ko: string;
  de: string;
  pt: string;
}

export interface WelcomeLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface TopicSubmissions {
  archival: Archival;
}

export interface Archival {
  status: string;
  approved_on: Date;
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

export interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: null;
  portfolio_url: string;
  bio: string;
  location: string;
  links: UserLinks;
  profile_image: ProfileImage;
  instagram_username: null;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  total_promoted_photos: number;
  total_illustrations: number;
  total_promoted_illustrations: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
  allow_messages: boolean;
  tags: Tags;
  photos: Photo[];
}

export interface Photo {
  id: string;
  slug: string;
  created_at: Date;
  updated_at: Date;
  blur_hash: string;
  asset_type: string;
  urls: Urls;
}

export interface Tags {
  custom: Custom[];
}

export interface Custom {
  type: string;
  title: string;
}

export interface UserLinks {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

export interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

export interface Social {
  instagram_username: null;
  portfolio_url: string;
  twitter_username: null;
  paypal_email: null;
}