<template>
  <div class="container">
    <h2 style="text-align: center">Sign in</h2>
    <form @submit.prevent="onSubmit">
      <div class="input-group">
        <input type="text" placeholder="Username" v-model="username" :readonly="!online" @keyup="resetBackendErrors" v-focus />
        <span v-show="submittedOnce && !username" class="validation-error">Username required.</span>
      </div>
      <div class="input-group">
        <input type="password" placeholder="Password" v-model="password" :readonly="!online" @keyup="resetBackendErrors" />
        <span v-show="submittedOnce && !password" class="validation-error">Password required.</span>
      </div>

      <input type="submit" value="Sign in" class="btn btn-positive" :disabled="!online" />
    </form>
    <p v-show="!online" class="validation-error">Signing in requires internet connection.</p>
    <p class="validation-error">{{backendError}}</p>
  </div>
</template>

<script src="./sign-in.js"></script>
<style scoped src="./sign-in.css"></style>