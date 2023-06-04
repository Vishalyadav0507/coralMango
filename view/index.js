window.addEventListener('DOMContentLoaded', async() => {
    let allResturent=await axios.get("http://localhost:3000/restaurants/")
    console.log(allResturent.data)
    showOnScreen(allResturent.data[0])
})

async function addReview(restaurantId) {
    try {
      // Open a form to get the review from the user

      const reviewText = prompt('Enter your review:');
  
      if (reviewText) {
        console.log(reviewText)
        const response = await axios.post('http://localhost:3000/reviews', {restaurantId,reviewText});
        console.log('Review added successfully:', response.data);
      } else {
        console.log('Review cancelled.');
      }
    } catch (error) {
      console.error('Error adding review:', error);
    }
  }

async function openReview(id){
    console.log(id)
    let allReviewbyID=await axios.get(`http://localhost:3000/reviews/${id}`)
    for(let i=0;i<allReviewbyID.data.length;i++){
        showReview(id,allReviewbyID.data[i].review_text)
    }
}
function showReview(id,review){
    let parentNode = document.getElementById(id)
    let childNode=`<li>${review}</li>`
    parentNode.innerHTML+=childNode
}

function showOnScreen(data) {
    let parentNode = document.getElementById('restaurentList')
    let childNode = `<li id="${data.id}" > resturent name = ${data.name} restaurent address=${data.address} restaurent description=${data.description} <button style="margin-top: 10px;" class="btn btn-danger" onclick="addReview('${data.id}')" >add review</button><button style="margin-top: 10px;" class="btn btn-danger" onclick="openReview('${data.id}')" >open review</button></li>`
    parentNode.innerHTML += childNode
}

