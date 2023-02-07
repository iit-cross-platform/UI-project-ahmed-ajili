import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import CardExam  from './CardExam'
const CardExamMeta: ComponentMeta<typeof CardExam> = {
    title: 'CardExam Component',
    component: CardExam,
    argTypes:{

    },
    args: {
        imageUrl:
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg',
    borderRadius: 10,
    height: 100,
    width: 100,
    text1: "fffff",
    text2: "gggggggggggg"

    }
}
export default CardExamMeta;

type CardExamStory = ComponentStory<typeof CardExam>
export const Basic : CardExamStory = (args) => <CardExam {...args} />
export const story2 : CardExamStory = (args) => <CardExam {...args} />
story2.args={
    imageUrl:
    'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2020%2F01%2Feminem-1-2000.jpg',
  borderRadius: 20,
  height: 500,
  width: 500,
  text1: "ggggggggggggggggg",
  text2: "ssssssssssssss"
}