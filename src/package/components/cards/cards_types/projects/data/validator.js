import * as Yup from 'yup';
import { validationTranslations } from '../../../../../utils/validation_translations';

export const ProjectValidator = formatMessage =>
    Yup.object().shape({
        name: Yup.string()
            .required(formatMessage(validationTranslations.required))
            .min(5, formatMessage(validationTranslations.min, { min: 5 })),
        description: Yup.string()
            .required(formatMessage(validationTranslations.required))
            .min(100, formatMessage(validationTranslations.min, { min: 0 })),
        images: Yup.array().of(
            Yup.object().shape({
                name: Yup.string()
                    .required(formatMessage(validationTranslations.required))
                    .min(5, formatMessage(validationTranslations.min, { min: 5 })),
                url: Yup.string()
                    .required(formatMessage(validationTranslations.required))
                    .url()
            })
        )
    });