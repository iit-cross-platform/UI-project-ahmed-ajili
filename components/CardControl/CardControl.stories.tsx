import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import CardControl  from './CardControl'
import SliderMusic from '../SliderMusic/SliderMusic';
const CardControlMeta: ComponentMeta<typeof CardControl> = {
    title: 'CardControl Component',
    component: CardControl,
    argTypes:{

    },
    args: {
        durationMusic : 5,
        slider: <SliderMusic duration={77} durationMax={100} setDuration={(duration) => console.log("slider music storie",duration)}/>
    }
}
export default CardControlMeta;

type CardControlStory = ComponentStory<typeof CardControl>
export const Basic : CardControlStory = (args) => <CardControl {...args} />