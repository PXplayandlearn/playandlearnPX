<template>
    <div>
        <div class="sample-page">
            <div class="container-fluid bg-white">
                <div class="row">
                    <div class="col-lg-12 col-sm-12 text-center">
                        <h1>Hello World!</h1>
                        <br />
                        <div>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from "vue";
    import vueadmin_header from "components/layouts/header/fixed-header.vue";
    export default {
        // ===Component name
        name: "blank",
        // ===Props passed to component
        props: {},
        components: {
            vueadmin_header
        },
    // ===component Data properties
        data() {
            return {
                modalShow: false,
                newname:'',
                newemail:'',
                newnumber:'',
                newlocation:'',
                newrole:'',
                contacts:[{
                    name:'Jon',
                    img:require('../../assets/img/authors/avatar1.jpg'),
                    email:'jon@gmail.com',
                    contact:'0123456789',
                    role:'Web developer',
                    location:'Hyderabad'
                },{
                    name:'Doe',
                    img:require('../../assets/img/authors/avatar2.jpg'),
                    email:'doe@gmail.com',
                    contact:'0123456789',
                    role:'Web developer',
                    location:'Hyderabad'
                },{
                    name:'Addison',
                    img:require('../../assets/img/authors/avatar3.jpg'),
                    email:'addison@gmail.com',
                    contact:'0123456789',
                    role:'Web developer',
                    location:'Hyderabad'
                },{
                    name:'Jon',
                    img:require('../../assets/img/authors/avatar4.jpg'),
                    email:'jon@gmail.com',
                    contact:'0123456789',
                    role:'Web developer',
                    location:'Hyderabad'
                },{
                    name:'Doe',
                    img:require('../../assets/img/authors/avatar1.jpg'),
                    email:'jon@gmail.com',
                    contact:'0123456789',
                    role:'Web developer',
                    location:'Hyderabad'
                },{
                    name:'Jon',
                    img:require('../../assets/img/authors/avatar.jpg'),
                    email:'jon@gmail.com',
                    contact:'0123456789',
                    role:'Web developer',
                    location:'Hyderabad'
                },],


                //this is tasks page data
                modalTask:false,
                newtaskname:'',
                newtaskdesc:'',
                newtaskdeadline:'',
                newimportant:'',
                tasks:[{
                    tasktitle:'Task-1',
                    taskdescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                    taskdeadline:'14/04/2018',
                    important:true,
                },{
                    tasktitle:'Task-2',
                    taskdescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                    taskdeadline:'14/04/2018',
                    important:true,
                },{
                    tasktitle:'Task-3',
                    taskdescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                    taskdeadline:'14/04/2018',
                    important:'true',
                },{
                    tasktitle:'Task-4',
                    taskdescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                    taskdeadline:'14/04/2018',
                    important:'true',
                },{
                    tasktitle:'Task-5',
                    taskdescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                    taskdeadline:'14/04/2018',
                    important:'true',
                },{
                    tasktitle:'Task-6',
                    taskdescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                    taskdeadline:'14/04/2018',
                    important:'true',
                },{
                    tasktitle:'Task-7',
                    taskdescription:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, hic quasi! Doloribus esse magni necessitatibus officia recusandae. Aliquam, aspernatur commodi, debitis harum illum odio porro quasi quia repudiandae ullam ut?',
                    taskdeadline:'14/04/2018',
                    important:'true',
                },]
            }
        },
        // ===Code to be executed when Component is mounted
        mounted() {

        },
        // ===Computed properties for the component
        computed: {

        },
        // ===Component methods
        methods: {
            addContact:function(){
                this.contacts.push({
                    name:this.newname,
                    email:this.newemail,
                    number:this.newnumber,
                    location:this.newlocation,
                    role:this.newrole
                }),
                this.modalShow=false
            },


            //            task section

            addTask:function () {
                this.tasks.push({
                    tasktitle:this.newtaskname,
                    taskdescription:this.newtaskdesc,
                    taskdeadline:this.newtaskdeadline,
                    important:this.newimportant,
                }),
                    this.newtaskname='',
                    this.newtaskdesc='',
                    this.newtaskdeadline='',
                    this.newimportant=false,
                    this.modalTask=false
            }
        }
    }
    
    
</script>
<!-- styles -->
<!-- adding scoped attribute will apply the css to this component only -->
<style scoped>
    .search{
        border: 1px solid #bdb3b3;
    }
    .contact-profile{
        width:50px;
        height: 50px;
    }
    .box-shadow{
        box-shadow: 0px 0px 1px 1px #cfcfcf;
    }
    .contact-pic{
        width: 50px;
        height: 50px;
    }
    .table td{
        padding: 16px;
        vertical-align: middle;
    }
    .contacts-box .custom-control-inline{
        margin-right: 0;
    }
    .custom-control-label::before{
        width: 100px;
        height: 100px;
    }
    .contact-page{
        font-size: 14px;
    }
    .options a:hover,.options2 a:hover{
        background-color: #eee;
    }


    /* to do list */
    .todoside-menu a:hover{
        background-color: #f5f5f5;
    }
    .todoside-menu a{
        font-size: 15px;
        color: #333;
    }
    .faExclamationCircle::before{
        content: "\f06a";
        font-size: 14px;
        top:-10px;
        position: relative;
    }
    .tasksearch,.tasks-list{
        box-shadow:0px 0px 1px 1px #cfcfcf;
    }
    .todo{
        padding: 15px;
        background-color: #fff;
    }
</style>