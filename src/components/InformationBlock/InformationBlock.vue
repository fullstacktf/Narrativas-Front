<template>
  <div>
    <InformationRow
      image="collaborate"
      title="collaborate"
      subtitle="Collaborate with your team to create fantastic stories"
      description="You can create your stories by your own or create them with your friends. Your choice!"
    />

    <InformationRow
      isReversed
      image="customize"
      title="customization"
      subtitle="Customize your character"
      description="Here you can be creative, as you can create whatever you want. Even you can create your characters for role playing!"
    />

    <InformationRow
      image="relationship"
      title="relationships"
      subtitle="Create relationships between your characters"
      description="A story without relations between its characters it's just nothing. You can create multiple characters and relate them!"
    />

    <InformationRow
      isReversed
      image="follow"
      title="follow stories"
      subtitle="Follow the stories of your friends"
      description="Or anyone! Share your stories and take a look what the community has created. Just a nice way to get new ideas!"
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
