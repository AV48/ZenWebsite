const responses = document.getElementById("responses");
const mySecret = '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'

async function send_message() {
  console.log("message sent");
  const input = document.getElementById('input').value;
  if (!input) return;

  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${mySecret}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }]
      })
    });

    const completion = await response.json();
    responses.innerHTML = completion.choices[0]?.message?.content || 'No response';
    
    document.getElementById('input').value = '';
  } catch (error) {
    console.error('Error:', error);
    responses.innerHTML = 'Error occurred while getting response';
  }
}

