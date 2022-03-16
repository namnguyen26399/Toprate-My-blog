<template>
    <div id="Content" class="flex w-full h-auto relative">
        <div id="left" class="w-[70%] pr-5">
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <PostItem></PostItem>
            <div id="pagination" class="w-full h-10 flex justify-start mt-4">
                <div
                    class="
                        text-xl
                        mr-2
                        cursor-pointer
                        bg-[#96d6f3]
                        w-7
                        h-7
                        text-center
                        rounded-sm
                    "
                >
                    1
                </div>
                <div
                    class="
                        text-xl
                        mr-2
                        cursor-pointer
                        bg-slate-50
                        w-7
                        h-7
                        text-center
                        rounded-sm
                    "
                >
                    2
                </div>
                <div
                    class="
                        text-xl
                        mr-2
                        cursor-pointer
                        bg-slate-50
                        w-7
                        h-7
                        text-center
                        rounded-sm
                    "
                >
                    3
                </div>
                <div
                    class="
                        text-xl
                        mr-2
                        cursor-pointer
                        bg-slate-50
                        w-7
                        h-7
                        text-center
                        rounded-sm
                    "
                >
                    ...
                </div>

                <div
                    class="
                        text-xl
                        mr-2
                        cursor-pointer
                        bg-slate-50
                        w-7
                        h-7
                        text-center
                        rounded-sm
                    "
                >
                    5
                </div>
                <div
                    class="
                        text-xl
                        mr-2
                        cursor-pointer
                        bg-slate-50
                        w-7
                        h-7
                        text-center
                        rounded-sm
                    "
                >
                    &gt;
                </div>
            </div>
        </div>
        <div id="right" class="w-[30%] sticky top-0 h-[800px]">
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
                    class="w-[90%] mx-auto border rounded-[4px] pl-5 h-10 mt-2 get-notify"
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
                        mt-4
                        btn-submit
                    "
                >
                    Submit
                </button>
            </div>
            <div class="mt-10 pl-5 flex flex-wrap main-tag">
                <div class="mt-2 bg-[#fde979]">Main Tag :</div>
                <a class="w-auto h-6 border p-1 px-2 leading-[100%] ml-3 mt-2" href="#">Bitcoin</a>
                <a class="w-auto h-6 border p-1 px-2 leading-[100%] ml-3 mt-2" href="#">Fashion</a>
                <a class="w-auto h-6 border p-1 px-2 leading-[100%] ml-3 mt-2" href="#">Beauty</a>
                <a class="w-auto h-6 border p-1 px-2 leading-[100%] ml-3 mt-2" href="#">Life hack</a>
                <a class="w-auto h-6 border p-1 px-2 leading-[100%] ml-3 mt-2" href="#">Tricks</a>
                <a class="w-auto h-6 border p-1 px-2 leading-[100%] ml-3 mt-2" href="#">Sport</a>
                <a class="w-auto h-6 border p-1 px-2 leading-[100%] ml-3 mt-2" href="#">Technology</a>
                <a class="w-auto h-6 border p-1 px-2 leading-[100%] ml-3 mt-2" href="#">Health</a>
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
.main-tag a:hover {
    background-color: rgb(23, 140, 175);
}
.main-tag a{
    transition : 0.4s ease-in-out
}
.get-notify:focus{
    border: 1px solid rgb(23, 140, 175);
    outline: none;
}
</style>