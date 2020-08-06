import { ThemNguoiDung } from "../Reducer/ConstReducer"

const initialState = {
    mangNguoiDung: [
        {
            taiKhoan: "123",
            matKhau: "123",
            eMail: "123",
            soDt: "123",
            hoTen: "nguyen van a",
            maNhom: "123"
        },
        {
            taiKhoan: "222",
            matKhau: "123",
            eMail: "123",
            soDt: "123",
            hoTen: "nguyen van b",
            maNhom: "3333"
        }
    ],
    nguoiDungEdit: 
        {
            taiKhoan: "123",
            matKhau: "123",
            eMail: "123",
            soDt: "123",
            hoTen: "123",
            maNhom: "123",
        }
    
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ThemNguoiDung: {
            let mangNguoiDungUpDate = [...state.mangNguoiDung, action.nd]
            return { ...state, mangNguoiDung: mangNguoiDungUpDate}
        }
        case 'chinh_sua': {
            state.nguoiDungEdit = action.nd;
            return {...state}
        }
        case "cap_nhat": {
            let mangNguoiDungUpDate = [...state.mangNguoiDung];

            let indexNguoiDung = mangNguoiDungUpDate.findIndex(nd => nd.taiKhoan === action.nguoiDung.taiKhoan);
            if (indexNguoiDung != -1) {
                mangNguoiDungUpDate[indexNguoiDung] = {...action.nguoiDung}
            }

            state.mangNguoiDung = mangNguoiDungUpDate

            return {...state}
        }




        default:
            return state
    }
}
