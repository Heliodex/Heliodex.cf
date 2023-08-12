<script lang="ts">
	import { fly } from "svelte/transition"
</script>

<Head title="About" />

<main >
	<h1>About</h1>

	<div in:fly={{ y: 40 }}>
		<span>Heliodex</span>
		<br />
		<span>/'hiliə</span>
		<span class="ipa">ʊ</span>
		<span>d</span>
		<span class="ipa">ɛ</span>
		<span>ks/</span>
		<br />
		<!-- Mix and match letters with the nearest looking font for phonetic characters. Not a good way of doing it. -->
	
		<p>
			text go here
			<br />
			todo: about page
		</p>
	</div>
</main>

<style lang="stylus">
	.ipa
		font-family Helvetica, Arial, sans-serif // support for phonetic chars
</style>
