import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react-native';

import Search  from './Search'
const SearchMeta: ComponentMeta<typeof Search> = {
    title: 'Search Component',
    component: Search,
    argTypes:{

    },
    args: {
        backgroundColor : "white",
        borderColor: "transparent" 
    }
}
export default SearchMeta;

type SearchStory = ComponentStory<typeof Search>
export const Basic : SearchStory = (args) => <Search {...args} />
export const story2 : SearchStory = (args) => <Search {...args} />
story2.args={
        backgroundColor : "transparent",
        borderColor: "#000000" 
}