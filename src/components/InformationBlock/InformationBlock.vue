<template>
  <div>
    <InformationRow
      image="collaborate"
      title="collaborate"
      subtitle="Collaborate with your team to create fantastic stories"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    />

    <InformationRow
      isReversed
      image="customize"
      title="customization"
      subtitle="Customize your character"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    />

    <InformationRow
      image="relationship"
      title="relationships"
      subtitle="Create relationships between your characters"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    />

    <InformationRow
      isReversed
      image="follow"
      title="follow stories"
      subtitle="Follow the stories of your friends"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    />
  </div>
</template>

<script>
import InformationRow from "./InformationRow";

export default {
  name: "InformationBlock",
  components: {
    InformationRow,
  },
};
</script>
