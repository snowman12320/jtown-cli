<template lang="">
  <Form @submit="onSubmit"  v-slot="{ errors }">
    {{ errors['email'] }}
    <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <Field id="email" name="email" type="email" class="form-control "
               placeholder="請輸入 Email" rules="email|required"
               :class="{ 'is-invalid': errors['email'],'is-valid': !errors['email']&& user.email }"
               v-model="user.email"></Field>
      <error-message  name="email" class="invalid-feedback"></error-message>
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>
  </Form>
</template>
<script>
export default {
  data () {
    return {
      user: {
        email: ''
      }
    };
  },
  methods: {
    onSubmit () {
      console.log(this.user);
    }
  }
};
</script>
<style lang="">

</style>
