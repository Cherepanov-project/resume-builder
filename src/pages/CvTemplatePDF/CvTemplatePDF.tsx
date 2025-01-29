import {temporaryCvDataSlice} from '@assets/const';
import {renderTemplatePDF} from './lib';

import {useTypedSelector} from '@hooks/cvTemplateHooks';
import {Paper} from '@mui/material';
import React from 'react';
import {StylesNameKeys} from './const';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const selectAllPersonaInfo = (state: { personalInfo: any }) => state.personalInfo;

export const CvTemplatePDF = React.forwardRef<HTMLDivElement, { styleName: StylesNameKeys }>(
    ({styleName}, ref) => {
        const userTemporaryCvDataSlice = useTypedSelector(selectAllPersonaInfo);
        let newData = userTemporaryCvDataSlice;
        if (userTemporaryCvDataSlice.personalData.fullName === '') {
            newData = temporaryCvDataSlice;
        }

        return (
            <Paper
                ref={ref}
                elevation={0}
                sx={{minWidth: '500px', minHeight: '1123px'}}>
                {renderTemplatePDF(styleName, newData)}
            </Paper>
        );
    },
);
