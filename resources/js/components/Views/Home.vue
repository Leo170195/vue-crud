<template>
  <div class="container">
    <div class="row row-cols-2 my-5">
        <div class="col p-4">
            <div class="card">
                <h5 class="card-title">titolonee</h5>
                <div class="card-body">
                    This is some text within a card body.
                    <button @click="$router.push({ name : 'articolo', params : {article_id : '1' } })" class="btn btn-secondary ">Vai a fa</button>
                </div>
            </div>
        </div>
        <div class="col p-4">
            <div class="card">
                <h5 class="card-title">titolonee</h5>
                <div class="card-body">
                    This is some text within a card body.
                    <button @click="$router.push({ name : 'articolo', params : {article_id : '2' } })" class="btn btn-secondary ">Vai a fa</button>
                </div>
            </div>
        </div>
        <div class="col p-4">
            <div class="card">
                <h5 class="card-title">titolonee</h5>
                <div class="card-body">
                    This is some text within a card body.
                    <button @click="$router.push({ name : 'articolo', params : {article_id : '3' } })" class="btn btn-secondary ">Vai a fa</button>
                </div>
            </div>
        </div>
        <div class="col p-4">
            <div class="card">
                <h5 class="card-title">titolonee</h5>
                <div class="card-body">
                    This is some text within a card body.
                    <button @click="$router.push({ name : 'articolo', params : {article_id : '4' } })" class="btn btn-secondary ">Vai a fa</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>