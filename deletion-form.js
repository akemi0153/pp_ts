// Data Deletion Form Handler
(function() {
    const form = document.getElementById('deletionForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Get form data
            const formData = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                accountType: document.getElementById('accountType').value,
                reason: document.getElementById('reason').value,
                additionalInfo: document.getElementById('additionalInfo').value,
                confirmation: document.getElementById('confirmation').checked,
                identityConfirm: document.getElementById('identityConfirm').checked,
                timestamp: new Date().toISOString()
            };

            // Validate required fields
            if (!formData.fullName || !formData.email || !formData.accountType) {
                showMessage('Please fill in all required fields.', 'error');
                return;
            }

            if (!formData.confirmation || !formData.identityConfirm) {
                showMessage('Please confirm all required checkboxes.', 'error');
                return;
            }

            // Disable submit button
            const submitBtn = form.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';

            try {
                // Create email body
                const emailBody = createEmailBody(formData);
                
                // Create mailto link
                const mailtoLink = `mailto:salinbanwa@gmail.com?subject=Data%20Deletion%20Request%20-%20${encodeURIComponent(formData.fullName)}&body=${encodeURIComponent(emailBody)}`;
                
                // Open email client
                window.location.href = mailtoLink;
                
                // Show success message
                showMessage('Your email client has been opened. Please send the email to complete your request.', 'success');
                
                // Reset form after a delay
                setTimeout(() => {
                    form.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText;
                }, 3000);

            } catch (error) {
                console.error('Error:', error);
                showMessage('An error occurred. Please try again or contact us directly at salinbanwa@gmail.com', 'error');
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });
    }

    function createEmailBody(data) {
        let body = 'DATA DELETION REQUEST\n';
        body += '='.repeat(50) + '\n\n';
        body += `Full Name: ${data.fullName}\n`;
        body += `Email Address: ${data.email}\n`;
        body += `Account Type: ${data.accountType}\n\n`;
        
        if (data.reason) {
            body += `Reason for Deletion: ${data.reason}\n\n`;
        }
        
        if (data.additionalInfo) {
            body += `Additional Information:\n${data.additionalInfo}\n\n`;
        }
        
        body += 'CONFIRMATIONS:\n';
        body += `☑ I understand this action is permanent and cannot be undone\n`;
        body += `☑ I confirm that I am the owner of this account\n\n`;
        body += `Request Submitted: ${new Date(data.timestamp).toLocaleString()}\n\n`;
        body += '='.repeat(50) + '\n';
        body += 'This is an automated data deletion request from Salinbanwa.\n';
        body += 'Please process this request according to data protection regulations.\n';
        
        return body;
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        formMessage.style.display = 'block';
        
        // Scroll to message
        formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        // Auto-hide after 10 seconds for success messages
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 10000);
        }
    }
})();
