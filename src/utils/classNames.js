//dùng để tối ưu hiện thị cho className và viết điều kiện nhìn cho gọn

export default function classNames(...args) {
  //khi chuyền vào function 1 cái args và  spread args thì nó sẽ trở thành 1 cái mảng
  return (
    args
      .reduce((acc, val) => {
        //vì nó mảng nên sử dụng reduce để tính toán
        if (typeof val === "string") {
          //concat đơn giản chỉ là nối mảng

          return acc.concat(val.split(" "));
        }
        return acc.concat(Object.values(val));
        //object ơ đây là khi ta truyền vô điều kiện và chấm ra để lấy val ra
      }, [])
      // [] initial là 1 mảng rỗng
      .join(" ")
  );
}
//ví dụ:   w-full py-6 px-4 -(split, concat)-> ["w-full","py-6","px-4"] -(join)-> 'w-full py-6 px-4'
