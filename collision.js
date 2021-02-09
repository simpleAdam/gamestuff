function AABBIntersect(ax, ay, aw, ah, bx, by, bw, bh) {
	return ax < bx+bw && bx < ax+aw && ay < by+bh && by < ay+ah;
};

// this seems to be the inverse way of doing it
function collision(first, second){
    if (    !(  first.x > second.x + second.width ||
                first.x + first.width < second.x ||
                first.y > second.y + second.height ||
                first.y + first.height < second.y)
    ) {
        return true;
    };
};

// another version of aabb
function collides(shape)
    {
        return shape.bottom > this.top &&
            shape.right > this.left &&
            shape.left < this.right &&
            shape.top < this.bottom;
    }
