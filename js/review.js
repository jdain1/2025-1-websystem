let reviews = [];
    let currentUser = getCurrentUser();

    function getCurrentUser() {
        const name = document.cookie.split(';').find(c => c.trim().startsWith('currentUser='));
        return name ? decodeURIComponent(name.split('=')[1]) : null;
    }

    $('.star').click(function () {
        let rating = $(this).data('value');
        $('#rating').val(rating);
        $('.star').removeClass('on');
        $(this).addClass('on').prevAll().addClass('on');
    });

    window.onload = function () {
        if (!currentUser) {
            alert("로그인이 필요합니다.");
            window.location.href = "../login/login.html";
            return;
        }

        const stored = localStorage.getItem("allReviews");
        if (stored) {
            reviews = JSON.parse(stored);
            reviews.forEach(r => renderReview(r.rating, r.text, r.author));
            updateAverage();
        }
    };

    function newRegister() {
        let subject = document.querySelector("#subject");
        let comment = subject.value.trim();
        let rating = parseInt(document.querySelector("#rating").value);

        if (!comment) {
            alert("리뷰 내용을 입력해주세요.");
            return;
        }

        const review = {
            rating: rating,
            text: comment,
            author: currentUser
        };
        reviews.push(review);
        localStorage.setItem("allReviews", JSON.stringify(reviews));
        renderReview(rating, comment, currentUser);
        updateAverage();

        subject.value = "";
        document.querySelector("#rating").value = 1;
        $(".star").removeClass("on");
        $(".star").eq(0).addClass("on");
    }

    function renderReview(rating, comment, author) {
        let newItem = document.createElement("li");
        newItem.className = "review-item";

        let ratingSpan = document.createElement("span");
        ratingSpan.className = "review-rating";
        ratingSpan.textContent = `${rating}점`;

        let reviewSpan = document.createElement("span");
        reviewSpan.className = "review-text";
        reviewSpan.textContent = `${comment} (${author})`;

        let delBtn = document.createElement("button");
        delBtn.className = "delete-btn";
        delBtn.textContent = "삭제";

        if (author === currentUser) {
            delBtn.onclick = function () {
                // 삭제 확인 및 데이터 제거
                reviews = reviews.filter(r => !(r.rating === rating && r.text === comment && r.author === author));
                localStorage.setItem("allReviews", JSON.stringify(reviews));
                itemList.removeChild(newItem);
                updateAverage();
            };
        } else {
            delBtn.style.display = "none";
        }

        newItem.appendChild(ratingSpan);
        newItem.appendChild(reviewSpan);
        newItem.appendChild(delBtn);

        let itemList = document.querySelector("#itemList");
        itemList.appendChild(newItem);
    }

    function updateAverage() {
        if (reviews.length === 0) {
            document.querySelector("#averageRating").textContent = "0";
            return;
        }
        let sum = reviews.reduce((acc, r) => acc + r.rating, 0);
        let avg = (sum / reviews.length).toFixed(1);
        document.querySelector("#averageRating").textContent = avg;
    }