<template>
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
</template>

<script>
export default {};
</script>

<style scoped>
.btn-submit {
    transition: 0.4s ease-in-out;
}
.btn-submit:hover {
    background-color: rgb(23, 140, 175);
}
.main-tag a:hover {
    background-color: rgb(23, 140, 175);
}
.main-tag a {
    transition: 0.4s ease-in-out;
}
.get-notify:focus {
    border: 1px solid rgb(23, 140, 175);
    outline: none;
}
</style>