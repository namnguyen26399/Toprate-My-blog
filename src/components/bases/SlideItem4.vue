<template>
    <div class="slide1 w-full h-[350px] first-letter ">
        <!-- <img class="absolute w-full h-full top-0 left-0 opacity-50 z-0" src="../../assets/slide1.jpg" alt=""> -->
        <div id="opac" class="w-full h-full bg-gray-900 opacity-30 absolute z-0 " ></div>
        <div >

        </div>
        <div class="font-bold text-2xl text-center mt-20 text-shadow relative z-10 text-white " id="title">
            Rèn luyện các giác quan để phát triển năng lực tâm trí
        </div>
        <div class="w-[70%] mx-auto mt-2 z-10 relative text-white" id="content">
            <p class="text-shadow">
                The main benefit of table-layout: fixed; is that the table
                renders much faster. On large tables, users will not see any
                part of the table until the browser has rendered the whole
                table. So, if you use table-layout: fixed, users will see the
                top of the table while the browser loads and renders rest of the
                table. This gives the impression that the page loads a lot
                quicker!
            </p>
        </div>
        <div class="mt-4">
            <button
                class="
                    btn-read-more
                    border border-l-rose-50
                    p-2
                    text-white
                    rounded-sm
                    relative
                    z-10
                "
            >
                Read More
            </button>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
#content {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.slide1 {
    background-image: url(../../assets/slide4.jpg);
    /* opacity: 0.6; */
    transition: 0.8s ease-out;
}

.btn-read-more:hover {
    background-color: rgb(116, 116, 116);
    color: white;
    border: none;
}
.slide1:hover #opac{
    opacity: 0.2;
}
</style>