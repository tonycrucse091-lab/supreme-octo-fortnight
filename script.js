document.addEventListener('DOMContentLoaded', () => {
    const transferForm = document.getElementById('transferForm');

    if (transferForm) {
        transferForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Collect form data
            const formData = new FormData(transferForm);
            const name = formData.get('senderName');
            const amount = formData.get('amount');
            const recipient = formData.get('recipient');
            const reason = formData.get('reason');

            // Simulate processing and redirect to confirmation
            // In a real app, this would be an API call
            const params = new URLSearchParams({
                name,
                amount,
                recipient,
                reason
            });

            window.location.href = `confirmation.html?${params.toString()}`;
        });
    }
});
