import { RendererCreator, RendererMiddleware } from './rendererMiddleware';
import { StrictStyleOptions } from '../StyleOptions';

/**
 * @type {object}
 * @property {boolean} atEnd - `true`, if the transcript scroll view is at the end, otherwise, `false`.
 * @property {object} styleOptions - Normalized style options.
 * @property {boolean} unread - `true`, if there are unread messages in the transcripts, otherwise, `false`.
 */
export type ScrollToEndButtonCreateOptions = {
  atEnd: boolean;
  styleOptions: StrictStyleOptions;
  unread: boolean;
};

/**
 * @type {object}
 * @property {function} onClick - The callback function to call when the user click on the button.
 */
export type ScrollToEndButtonProps = {
  onClick: () => any;
};

/**
 * The middleware for rendering scroll to end button.
 */
export type ScrollToEndButtonMiddleware = RendererMiddleware<
  {},
  ScrollToEndButtonCreateOptions,
  ScrollToEndButtonProps
>;

export type ScrollToEndButtonCreator = RendererCreator<ScrollToEndButtonCreateOptions, ScrollToEndButtonProps>;
