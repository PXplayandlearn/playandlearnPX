<template>
    <div>
        <div class="user_section">
            <div class="row">
                <div class="col-12">
                    <div class="img-wrapper"><img :src="this.$store.state.user.picture" alt="user not found" class="rounded-circle"></div>
                    <p class="mt-2 mb-1 user_name_max text-center">{{this.$store.state.user.name}}</p>
                </div>
                <div class="shift_left">
                <div class="leftuser_icons col-12 compact_data">
                    <div class="row">
                      
                        <div class="col-md-3 logout_padd"><a href="#/login" title="Logout"><i class="fa fa-sign-out"></i><h7>Log out</h7></a></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped lang="scss">
/*user section*/
@import "../../css/customvariables";

.user_section {
    height: 188px;
     padding: 15px 20px;

    .img-wrapper{
        width: 100px;
        border-radius:50%;
        padding:7px;
        margin:auto;
    }
    img {
        width: 84px;
        border: 2px solid #ccc;
    }

    p {
        font-size: 15px;
    }
    .leftuser_icons .logout_padd{
        padding: 1px !important;
    }
}
.user_name_max {
    text-transform:uppercase;
    font-weight:700;
    max-width: 210px;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    margin: 0 0 -4px;
    padding-top: 2px;
    padding-bottom: 5px;
}

.leftuser_icons div {
    cursor: pointer;
    padding: 1px 12px;
    font-size:18px;
    background-color: transparent;
    margin-right: 3px;
    border-radius: 50px;
    margin: auto;
    width: 100%;
    display: inline;
}
.user_name_max,
.leftuser_icons i{
    color:$menu_color;
}
.shift_left{
    margin-left:45px;
}
</style>
