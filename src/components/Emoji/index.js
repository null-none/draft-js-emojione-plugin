import React from 'react';
import clsx from 'clsx';
import emojione from 'emojione';

const Emoji = ({
  theme = {},
  cacheBustParam,
  imagePath,
  imageType,
  className,
  decoratedText,
  useNativeArt,
  ...props
}) => {
  const shortName = emojione.toShort(decoratedText);

  let emojiDisplay = null;
  if (useNativeArt === true) {
    emojiDisplay = (
      <span title={emojione.toShort(decoratedText)}>{props.children}</span>
    );
  } else {
    // short name to image url code steal from emojione source codes
    const shortNameForImage = emojione.emojioneList[shortName].uc_base;
    const backgroundImage = `url(${imagePath}${shortNameForImage}.${imageType}${cacheBustParam})`;
    console.log(backgroundImage);
    const combinedClassName = clsx(theme.emoji, className);

    emojiDisplay = (
      <span
        className={combinedClassName}
        title={emojione.toShort(decoratedText)}
        style={{ backgroundImage }}
      >
        {props.children}
      </span>
    );
  }

  return emojiDisplay;
};

export default Emoji;
