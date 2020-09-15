import { StoryFn } from '@storybook/addons';

const withGlobalStyles = (storyFn: StoryFn) => (
  <>
    {storyFn()}
  </>
)

export default withGlobalStyles;
