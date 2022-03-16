<template>
    <div
        id="Post-Item"
        class="w-full h-[220px] flex border-b mt-5 border-[#ebebeb]"
    >
        <div class="w-[40%] p-4 relative" id="img">
            <div
                id="border-top-left"
                class="
                    absolute
                    w-[60%]
                    h-[50%]
                    border-t border-l border-[black]
                "
            >
                <div id="time" class="absolute left-[105%] top-[-12px]">
                    8,August
                </div>
                <div
                    id="style"
                    class="absolute rotate w-fit h-fit top-[120%] left-[-25px]"
                >
                    Beauty
                </div>
            </div>
            <div class="w-[85%] h-[85%] m-5">
                <img src="../../assets/img1.jpg" alt="" />
            </div>
        </div>
        <div class="w-[60%] pr-4 relative" id="content">
            <div class="w-[70%] text-left font-semibold text-[20px]" id="title">
                Lòng Đau Tình Phai (SINGLE) - HKT BAND Ft Chấn Hào 2013
            </div>
            <div class="mt-3 w-[98%]" id="intension">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book Lorem
                Ipsum has been the industry's standard dummy text ever since the
                1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It was popularised in
                the 1960s with the release of Letraset sheets containing Lorem
                Ipsum passages, and more recently with desktop publishing
                software like Aldus PageMaker including versions of Lorem Ipsum.
                Lorem Ipsum has been the industry's The generated Lorem Ipsum is
                therefore always Making this the first true generator It is a
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English. It uses a
                dictionary of over 200 Latin words, combined with a handful of
                model sentence structures, to generate Lorem Ipsum which looks
                reasonable. The generated Lorem Ipsum is therefore always free
                from repetition, injected humour, or non-characteristic words
                etc. There are many variations of passages of Lorem Ipsum
                available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don't look
                even slightly believable. If you are going to use a passage of
                Lorem Ipsum, you need to be sure there isn't anything
                embarrassing hidden in the middle of text.
            </div>
            <div class="mt-3">
                <button
                    class="
                        bg-blue-400
                        text-white
                        p-[6px]
                        rounded-[2px]
                        btn-read-more
                    "
                >
                    Read more
                </button>
            </div>
            <div class="mt-5 relative flex justify-between" id="author">
                <p>Ng. Sy Nam</p>
                <div class="flex">
                    <p class="mr-2">803</p>
                    <img class="mr-2" src="../../assets/seen.png" alt="" />
                </div>
            </div>
            <button
                @click="btnMore"
                class="text-xl font-bold absolute top-2 right-0"
            >
                <img class="w-[17px]" src="../../assets/more.png" alt="" />
            </button>
            <div 
            v-if="isOpen"
                id="edit-del"
                class="
                    absolute
                    top-0
                    right-6
                    bg-white
                    w-28
                    h-16
                    border
                    rounded-md
                "
            >
                <div
                    class="
                        text-center
                        h-1/2
                        rounded-tr-md rounded-tl-md
                        bg
                        border-b
                    "
                >
                    <a href="#">Edit</a>
                </div>
                <div class="text-center h-1/2 rounded-br-md rounded-bl-md">
                    <a href="#">Delete</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        btnMore() {
            this.isOpen = !this.isOpen;
        },
    },
    data(){
        return{
            isOpen:false
        }
    }
};
</script>

<style scope>
.rotate {
    transform: rotate(-90deg);
}
#intension {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.btn-read-more:hover {
    background-color: rgb(31, 127, 252);
}
.btn-read-more {
    transition: 0.6s ease-out;
}
#edit-del div:hover { 
    background-color: rgb(235, 235, 235);
}
#edit-del div{
    transition: 0.4s ease-in-out;
}
</style>