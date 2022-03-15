<template>
    <div id="menu" class="bg-[#FAFAF7] w-full h-10 relative">
        <ul id="list-menu" class="flex w-fit h-full mx-auto align-items-center">
            <li><a href="#">Home</a></li>
            <li class="flex cursor-pointer align-items-center" id="news">
                <a href="#">Hot News </a>
                <img class="w-4 h-4 ml-1" src="../../assets/down.png" alt="" />
            </li>
            <li><a href="#">Features</a></li>
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Video</a></li>
            <li><a href="#">Image</a></li>
        </ul>
        <!-- //? input form search -->
        <input
            ref="search"
            id="input-form"
            class="h-10 w-full pl-10 bg-[#FAFAF7]"
            type="text"
            placeholder="search on this website . . ."
            style="display: none"
        />

        <button
            @click="BtnSearch"
            id="btn-search"
            class="absolute w-auto h-auto cursor-pointer right-3 top-2"
        >
            <img src="../../assets/search.png" alt="" />
        </button>
        <button
            @click="BtnExit"
            id="btn-exit"
            class="absolute w-auto h-auto cursor-pointer right-3 top-2"
            style="display: none"
        >
            <img src="../../assets/exit.png" alt="" />
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        BtnSearch() {
            document.getElementById("list-menu").style.display = "none";
            document.getElementById("btn-search").style.display = "none";
            document.getElementById("input-form").style.display = "block";
            document.getElementById("btn-exit").style.display = "block";
            this.$refs.search.focus();
        },
        BtnExit() {
            document.getElementById("list-menu").style.display = "flex";
            document.getElementById("btn-search").style.display = "block";
            document.getElementById("input-form").style.display = "none";
            document.getElementById("btn-exit").style.display = "none";
        },
    },
};
</script>

<style scope>
#menu ul li {
    margin-right: 32px;
}
#menu ul li a {
    color: rgb(90, 90, 90);
    font-size: 16px;
    font-weight: 600;
    transition: 1s ease-out;
}
#menu ul li:hover a {
    color: rgb(0, 0, 0);
    font-size: 16px;
    font-weight: 600;
}

.align-items-center {
    align-items: center;
}
#input-form:focus {
    outline: none;
}
</style>