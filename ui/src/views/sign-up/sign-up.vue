<template>
  <div class="container">
    <h2 style="text-align: center">Sign up</h2>
    <form @submit.prevent="onSubmit">
      <div class="input-group">
        <input type="text" placeholder="Username" v-model="username" :readonly="!online" />
        <span v-show="submittedOnce && !username" class="validation-error">Username required.</span>
      </div>
      <div class="input-group">
        <input type="password" placeholder="Password" v-model="password" :readonly="!online" />
        <span v-show="submittedOnce && !password" class="validation-error">Password required.</span>
      </div>

      <div class="input-group">
        <input
          type="password"
          placeholder="Confirm password"
          v-model="confirmPassword"
          :readonly="!online"
        />
        <span
          v-show="submittedOnce && confirmPassword !== password"
          class="validation-error"
        >Passwords don't match.</span>
      </div>

      <input type="submit" value="Sign up" class="btn btn-positive" :disabled="!online" />
    </form>
    <p v-show="!online" class="validation-error">Signing up requires an internet connection.</p>
  </div>
</template>

<script src="./sign-up.js"></script>
<style scoped src="./sign-up.css"></style>