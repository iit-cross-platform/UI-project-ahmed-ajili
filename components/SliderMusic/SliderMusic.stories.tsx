import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import SliderMusic  from './SliderMusic'
const SliderMusicMeta: ComponentMeta<typeof SliderMusic> = {
    title: 'SliderMusic Component',
    component: SliderMusic,
    argTypes:{

    },
    args: {
        duration : 5,
        durationMax : 33,
        setDuration : (duration) => console.log("slider music storie",duration)

    }
}
export default SliderMusicMeta;

type SliderMusicStory = ComponentStory<typeof SliderMusic>
export const Basic : SliderMusicStory = (args) => <SliderMusic {...args} />