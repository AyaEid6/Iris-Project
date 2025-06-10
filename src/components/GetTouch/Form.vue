<template>
    <div class="form position-relative">
        <form class="position-absolute">
            <div class="row g-4">
                <!-- Name -->
                <div class="col-md-6">
                <label for="name" class="form-label">Your name*</label>
                <input type="text" class="form-control" id="name" placeholder="your name" required>
                </div>

                <!-- Email -->
                <div class="col-md-6">
                <label for="email" class="form-label">Contact email*</label>
                <input type="email" class="form-control" id="email" placeholder="you@example.com" required>
                </div>

                <!-- Company Name -->
                <div class="col-md-6">
                <label for="company" class="form-label">Company name*</label>
                <input type="text" class="form-control" id="company" placeholder="Company name" required>
                </div>

                <!-- Country -->
                <div class="col-md-6">
                <label for="country" class="form-label">Country*</label>
                <input type="text" class="form-control" id="country" placeholder="your country" required>
                </div>

                <!-- Message -->
                <div class="col-12">
                <label for="message" class="form-label">Your message*</label>
                <textarea class="form-control" style="resize: none;" id="message" rows="4" placeholder="Tap your message..." required></textarea>
                </div>

                <!-- Notice -->
                <div class="col-12">
                    <p class="mb-0 pb-0 notice">By submitting this form you agree to our terms and conditions and our Privacy Policy which explains how we may collect,
                         use and disclose your personal information including to third parties.</p>
                </div>

                <!-- Submit -->
                <div class="col-12">
                    <button type="submit" >Submit Now</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script setup>

</script>

<style  scoped>
form{
    transform: translateY(-55%);
}
</style>