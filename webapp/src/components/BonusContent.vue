<template>
  <div>
    <h2>BANANA</h2>
    <p>
      <code>'b' + 'a' + + 'a' + 'a'</code> is <b>banana</b> after
      <code>toLowerCase()</code> is because of <code>'a' + + 'a'</code> is equal
      to <b>NaN</b> which means <b>not a number</b>.
      <br />
      Statement is searching for a <b>number</b> which is not in the code. so
      after lower casing the <code>NaN</code> it became <b>nan</b> hence the
      output <b>banana</b>
    </p>
  </div>
</template>

<script>
export default {
  name: "BonusContent",
};
</script>
