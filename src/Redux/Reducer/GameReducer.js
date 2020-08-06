import { getRandomInt } from "../../BaiTapRedux/Game_BauCua/utils/random"

const initialState = {
    tongTien: 100,
    danhSachCuoc: [
        { ma: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0, },
        { ma: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0, },
        { ma: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0, },
        { ma: "ca", hinhAnh: "./img/ca.png", giaCuoc: 0, },
        { ma: "nai", hinhAnh: "./img/nai.png", giaCuoc: 0, },
        { ma: "ga", hinhAnh: "./img/ga.png", giaCuoc: 0, },
    ],
    xucXac: [
        { ma: "bau", hinhAnh: "./img/bau.png", giaCuoc: 0, },
        { ma: "cua", hinhAnh: "./img/cua.png", giaCuoc: 0, },
        { ma: "tom", hinhAnh: "./img/tom.png", giaCuoc: 0, },
    ],
}


const GameBauCuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case "tang_giam":
            console.log(action);

            let { tongTien } = state; // thay cho state.tongTien
            let danhSachCuoc = [...state.danhSachCuoc];
            let index = danhSachCuoc.findIndex((element) => element.ma === action.ma);

            if (index !== -1) {
                if (action.tangGiam) {
                    danhSachCuoc[index].giaCuoc += 10;
                    tongTien -= 10;
                } else {
                    danhSachCuoc[index].giaCuoc -= 10;
                    tongTien += 10;
                }
            }
            return {...state, danhSachCuoc, tongTien };


        case "choi_game": {
            console.log(action)
            let {tongTien} = state
            let danhSachCuoc = [...state.danhSachCuoc];

            // tạo xúc xắc ngẫu nhiên

            let xucXac = [
                danhSachCuoc[getRandomInt(6)],
                danhSachCuoc[getRandomInt(6)],
                danhSachCuoc[getRandomInt(6)],
            ];

            // lấy những danh sách cược
            danhSachCuoc = danhSachCuoc.filter((element)=> element.giaCuoc > 0);

            // xử lý trả lại tiền
            for (let element of danhSachCuoc) {
                let tralaitien = xucXac.find((item) => item.ma === element.ma);
                // console.log(tralaitien);
                if (tralaitien) {
                    tongTien += element.giaCuoc;
                }
            }
            
            //trúng thưởng

            for (let element of xucXac) {
                let trungThuong = danhSachCuoc.find((item) => item.ma === element.ma);
                if (trungThuong) {
                    tongTien += trungThuong.giaCuoc;
                }
            }
            return {...state, xucXac, tongTien};

            
        }
        default:
            break;
    }
    return { ...state };
}

export default GameBauCuaReducer;