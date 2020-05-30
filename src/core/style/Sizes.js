/*
 * @flow
 */

// 1020 = 960 for content + 2*30 for edges padding
export const PAGE_SECTION_MIN_WIDTH :number = 1020;
export const WINDOW_EDGE_PADDING :number = 30;
export const CONTENT_GRID_WIDTH :number = PAGE_SECTION_MIN_WIDTH - (WINDOW_EDGE_PADDING * 2);

// New sizes: 1600 = 1104 for content + 2 *248 for edges padding
export const PAGE_SECTION_WIDTH :number = 1600;
export const PAGE_PADDING :number = 248;
export const CONTENT_WIDTH :number = PAGE_SECTION_WIDTH - (PAGE_PADDING * 2);

// Common Media Queries
export const MEDIA_QUERY_SM :number = 420;
export const MEDIA_QUERY_MD :number = 768;
export const MEDIA_QUERY_LG :number = PAGE_SECTION_MIN_WIDTH;

// Technology Media Queries
export const MEDIA_QUERY_TECH_SM :number = 420;

// Jurisdictions Media Queries
export const MEDIA_QUERY_JUR_SM :number = 530;
export const MEDIA_QUERY_JUR_MD :number = 900;
export const MEDIA_QUERY_JUR_LG :number = 1300;
