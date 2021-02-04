import React from 'react';
import { FormattedMessage } from 'react-intl';

import { CopyWrapper } from '../../commons/copy_wrapper/copy_wrapper';

import { ReactComponent as TwitterIcon } from '../../../assets/icons/brands/twitter.svg';
import { ReactComponent as LinkedInIcon } from '../../../assets/icons/brands/linkedin.svg';
import { ReactComponent as ShareIcon } from '../../../assets/icons/share.svg';

export const SHARE_LINKS_DATA = Object.freeze({
    twitter: {
        icon: TwitterIcon,
        getLink: ({ translatedMessage }) => `https://twitter.com/LouisGourain`
    },
    linkedIn: {
        icon: LinkedInIcon,
        getLink: ({ link }) => `https://www.linkedin.com/in/louis-gourain-7a0551113/`
    }
});
