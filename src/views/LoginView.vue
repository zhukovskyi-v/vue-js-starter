<template>
  <div ui-view="" class="ng-scope">
    <div class="auth-page ng-scope">
      <div class="container page">
        <div class="row">
          <div class="col-md-6 offset-md-3 col-xs-12">
            <h1 class="text-xs-center ng-binding" ng-bind="$ctrl.title">Sign in</h1>
            <p class="text-xs-center">
              <RouterLink to="register"> Need an account? </RouterLink>
            </p>

            <list-errors errors="$ctrl.errors" class="ng-isolate-scope"
              ><ul class="error-messages ng-hide" ng-show="$ctrl.errors">
                <!-- ngRepeat: (field, errors) in $ctrl.errors -->
              </ul>
            </list-errors>

            <form ng-submit="$ctrl.submitForm()" class="ng-pristine ng-valid ng-valid-email">
              <fieldset ng-disabled="$ctrl.isSubmitting">
                <fieldset class="form-group ng-hide" ng-show="$ctrl.authType === 'register'">
                  <input
                    class="form-control form-control-lg ng-pristine ng-untouched ng-valid ng-empty"
                    type="text"
                    placeholder="Username"
                    ng-model="$ctrl.formData.username"
                  />
                </fieldset>

                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg ng-pristine ng-untouched ng-valid ng-empty ng-valid-email"
                    type="email"
                    placeholder="Email"
                    ng-model="$ctrl.formData.email"
                  />
                </fieldset>

                <fieldset class="form-group">
                  <input
                    class="form-control form-control-lg ng-pristine ng-untouched ng-valid ng-empty"
                    type="password"
                    placeholder="Password"
                    ng-model="$ctrl.formData.password"
                  />
                </fieldset>

                <button
                  class="btn btn-lg btn-primary pull-xs-right ng-binding"
                  type="submit"
                  ng-bind="$ctrl.title"
                >
                  Sign in
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'McvLogin',
  methods: {}
}
</script>
