<template>
    <div>
        <h1>New Memo</h1>
        <textarea name="memo" v-model="memoBody"></textarea>
        <button @click="save">追加</button>
    </div>
</template>

<script>

export default {
    name: "new",
    data: function() {
        return {
            memoBody: ""
        }
    },
    methods: {
        save: function() {
            this.$store.commit("save", {
                body: this.memoBody
            });
            this.$router.push("/");
        }
    }
};
</script>
