/**
 * @type required title
 * @type optional btnStyles
 * @type required elTag
 */
export type BtnProps = {
  title: string;
  btnStyles?: string;
  elTag: 'linkTag' | 'buttonTag';
};
