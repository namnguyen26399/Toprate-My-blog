<template>
    <div id="Content" class="flex w-full h-auto relative">
        <div id="left" class="w-[70%] pr-5">
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <div id="pagination" class="w-full h-10">Pagination</div>
        </div>
        <div id="right" class="w-[30%] sticky top-0 h-screen">
            <div id="popular-post">
                <p class="text-center mb-5 mt-3 text-lg font-bold bg-gray-100">
                    Popular Posts
                </p>
                <div id="popular-post-item" class="flex mt-4">
                    <div class="w-[30%]">
                        <img src="../../assets/img1.jpg" alt="" />
                    </div>
                    <div class="w-[60%] ml-3 text-[15px] font-semibold">
                        Lòng Đau Tình Phai (SINGLE) - HKT BAND Ft Chấn Hào 2013
                        <div class="text-gray-400 text-[13px] font-normal mt-2">
                            August 23, 2016
                        </div>
                    </div>
                </div>
                <div id="popular-post-item" class="flex mt-4">
                    <div class="w-[30%]">
                        <img src="../../assets/img1.jpg" alt="" />
                    </div>
                    <div class="w-[60%] ml-3 text-[15px] font-semibold">
                        Lòng Đau Tình Phai (SINGLE) - HKT BAND Ft Chấn Hào 2013
                        <div class="text-gray-400 text-[13px] font-normal mt-2">
                            August 23, 2016
                        </div>
                    </div>
                </div>
                <div id="popular-post-item" class="flex mt-4">
                    <div class="w-[30%]">
                        <img src="../../assets/img1.jpg" alt="" />
                    </div>
                    <div class="w-[60%] ml-3 text-[15px] font-semibold">
                        Lòng Đau Tình Phai (SINGLE) - HKT BAND Ft Chấn Hào 2013
                        <div class="text-gray-400 text-[13px] font-normal mt-2">
                            August 23, 2016
                        </div>
                    </div>
                </div>
            </div>
            <div id="contact">
                <p class="text-center mb-5 mt-5 text-lg font-bold bg-gray-100">
                    Contact Us
                </p>
                <div class="flex justify-around">
                    <img src="../../assets/fb.png" alt="" />
                    <img src="../../assets/twet.png" alt="" />
                    <img src="../../assets/ins.png" alt="" />
                    <img src="../../assets/you.png" alt="" />
                </div>
            </div>
            <div id="get notify" class="mt-3 w-full h-auto flex flex-col">
                <p class="text-center mb-5 mt-5 text-lg font-bold bg-gray-100">
                    Get Notify
                </p>
                <p class="text-center">
                    Send us email to receive notify new post
                </p>
                <input
                    class="w-[90%] mx-auto border rounded-[4px] pl-5 h-10 mt-2"
                    type="text"
                    placeholder="Your email"
                    name=""
                    id="input-email"
                />
                <button
                    class="
                        bg-blue-400
                        p-2
                        w-24
                        mx-auto
                        rounded-[4px]
                        mt-2
                        btn-submit
                    "
                >
                    Submit
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import PostItem from "../bases/PostItem.vue";
export default {
    components: { PostItem },
};
</script>

<style scope>
.btn-submit {
    transition: 0.4s ease-in-out;
}
.btn-submit:hover {
    background-color: rgb(23, 140, 175);
}
</style>