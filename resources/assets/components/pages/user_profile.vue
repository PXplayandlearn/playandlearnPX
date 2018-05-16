<template>
    <div class="row">
        <div class="col-xl-7 col-lg-7">
            <b-card class="bg-info-card">
                <div class="profile text-center ">
                    <img :src="this.$store.state.user.picture" alt="User Image" class="rounded-circle img-fluid profile-thumb mb-3">
                    <h4 class="text-gray">{{this.$store.state.user.name}}</h4>
                    <p>{{this.$store.state.user.job}}</p>
                </div>
                <div class="profile_details">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="nav-tabs-custom">
                                <b-tabs>
                                    <b-tab title="My Details" active>
                                          <div class="row">
                                              <div class="col-12">
                                                  <div class="row list-inline">
                                                      <div class="col-4 text-right mt-2">Email :</div>
                                                      <div class="col-8 mt-2"></div>
                                                      <div class="col-4 text-right mt-2">First Name :</div>
                                                      <div class="col-8 mt-2"></div>
                                                      <div class="col-4 text-right mt-1">Last Name :</div>
                                                  </div>
                                              </div>
                                          </div>
                                    </b-tab>
                                </b-tabs>
                            </div>
                        </div>
                    </div>
                </div>
            </b-card>
        <div class = "shiftRight">
        <button type="button" class="btn btn-primary">Update Info
                                </button> 
            <button type="button" class="btn btn-primary"> Change Password
                                </button>
            </div>
        </div>
          

    </div>
     

</template>
 <button> Update Info</button>
<script>
import vScroll from "components/plugins/scroll/vScroll.vue"
export default {
    name: "user_profile",
    components: {
        vScroll
    },
    mounted: function() {},
    destroyed: function() {}
}
</script>
<style src="assets/css/user_profile.css" scoped></style>
<style>
.shiftRight{
  margin-left:700px;
 display:inline-block;
}
</style>