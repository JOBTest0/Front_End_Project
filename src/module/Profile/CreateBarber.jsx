import { Buffer } from 'buffer';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';


function CreateBarber() {
    const location = useLocation();
    const { user } = location.state;
    const [mybarber, setmybarber] = useState([])

    useEffect(() => {
        const idBarber = user._id
        axios.get(`http://localhost:3000/api/getMybarber/${idBarber}`)
            .then(res => {
                if (res) {
                    setmybarber(res.data)
                }
            }).catch((error) => {
                console.log(error)
            })
    }, [])

    // เก็บค่าจาก input
    const [formData, setFormData] = useState({
        idBarber: '',
        nameBarber: '',
        phone: '',
        location: '',
        dateOpen: '',
        dateClose: '',
        address: '',
        facebook: '',
        line: '',
        instagram: '',
    });

    const [image, setImage] = useState(null); // เก็บรูปภาพ

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setImage(e.target.files[0]); // รับไฟล์จาก input
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = new FormData(); // ใช้ FormData เพื่อส่งไฟล์
        data.append('idBarber', user._id)
        data.append('nameBarber', formData.nameBarber);
        data.append('phone', formData.phone);
        data.append('location', formData.location);
        data.append('dateOpen', formData.dateOpen);
        data.append('dateClose', formData.dateClose);
        data.append('address', formData.address);
        data.append('contact', JSON.stringify({
            facebook: formData.facebook,
            line: formData.line,
            instagram: formData.instagram,
        }));
        if (image) {
            data.append('image', image); // เพิ่มไฟล์เข้าไป
        }

        console.log(formData, image)

        try {
            // ส่งข้อมูลไปยัง backend
            const response = await api.post('create-barber', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleupdateBarber = (e) => {
        const { name, value } = e.target;

        // แยกส่วนของชื่อฟิลด์ให้ตรงกับ `contact` หรือฟิลด์อื่น ๆ
        if (name === 'facebook' || name === 'line' || name === 'instagram') {
            setmybarber(prevState => ({
                ...prevState,
                contact: {
                    ...prevState.contact,
                    [name]: value
                }
            }));
        } else {
            setmybarber(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };


    const handlesubmitupdate = async () => {
        try {
            // สร้างอ็อบเจ็กต์ข้อมูลที่ต้องการส่ง
            const data = {
                idBarber: user._id,
                nameBarber: mybarber.nameBarber,
                phone: mybarber.phone,
                dateOpen: mybarber.dateOpen,
                dateClose: mybarber.dateClose,
                address: mybarber.address,
                contact: {
                    facebook: mybarber?.contact?.facebook || '',
                    line: mybarber?.contact?.line || '',
                    instagram: mybarber?.contact?.instagram || '',
                }
            };
            // ส่งข้อมูลด้วย axios
            const response = await axios.post(`http://localhost:3000/api/updateBarber/${user._id}`, data, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            // ตรวจสอบข้อมูลที่ตอบกลับ
            console.log('Response data:', response.data);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex border w-[900px] h-[800px] rounded-[12px]'>
                <div className='w-full'>
                    <p className='flex items-center p-[20px] border-b-[1px] h-[60px]'>
                        ข้อมูลร้านตัดผม
                    </p>
                    {mybarber.staus == false &&
                        <form onSubmit={handleSubmit}>
                            <div className='flex w-full justify-between p-[20px]'>
                                <div className='w-[48%]'>
                                    <p>ชื่อร้านตัดผม</p>
                                    <input type="text" className='border h-[50px] w-full' name="nameBarber" value={formData.nameBarber} onChange={handleInputChange} />
                                </div>
                                <div className='w-[48%]'>
                                    <p>เบอร์โทรศัพท์</p>
                                    <input type="text" className='border h-[50px] w-full' name="phone" value={formData.phone} onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className='w-full p-[20px]'>
                                <p>Location</p>
                                <input type="text" className='border h-[50px] w-full' name="location" value={formData.location} onChange={handleInputChange} />
                            </div>

                            <div className='w-full flex p-[20px]'>
                                <div className='flex w-1/2'>
                                    <div className='w-[50%]'>
                                        <p>เวลาเปิด</p>
                                        <input type="time" className='border w-[95%] h-full text' name="dateOpen" value={formData.dateOpen} onChange={handleInputChange} />
                                    </div>
                                    <div className='w-[50%]'>
                                        <p>เวลาปิด</p>
                                        <input type="time" className='border w-[95%] h-full text' name="dateClose" value={formData.dateClose} onChange={handleInputChange} />
                                    </div>
                                </div>
                                <div className='w-1/2'>
                                    <p>ที่อยู่</p>
                                    <input type="text" className='border w-full h-full' name="address" value={formData.address} onChange={handleInputChange} />
                                </div>
                            </div>

                            <div className='w-[70%] flex p-[20px] h-[100px]'>
                                <div className='w-1/3'>
                                    <p>Facebook</p>
                                    <input type="text" className='border w-[90%] h-full' name="facebook" value={formData.facebook} onChange={handleInputChange} />
                                </div>
                                <div className='w-1/3'>
                                    <p>Line</p>
                                    <input type="text" className='border w-[90%] h-full' name="line" value={formData.line} onChange={handleInputChange} />
                                </div>
                                <div className='w-1/3'>
                                    <p>Instagram</p>
                                    <input type="text" className='border w-[90%] h-full' name="instagram" value={formData.instagram} onChange={handleInputChange} />
                                </div>
                            </div>

                            {/* <div className=' mt-[20px] w-[50%] p-[20px]'>
                            <p>รูปปกของร้าน</p>
                            <label className='w-full cursor-pointer' htmlFor="image">
                                <div className='flex justify-center items-center w-[45%] rounded-[12px] border-dotted border-[1px] border-blue-500 h-[100px]'>
                                    <p>click to upload</p>
                                </div>
                            </label>
                            <input type="file" id='image' className='border' hidden onChange={handleFileChange} />
                        </div> */}
                            <div className='p-[20px]'>
                                <button type="submit" className='p-[10px] bg-blue-500 text-white rounded-[8px]'>สร้างร้าน</button>
                            </div>

                        </form>
                    }
                    {mybarber.staus !== false &&
                        <div className='p-[20px] w-full'>
                            <div className='flex justify-between w-fulll '>
                                <div className="mb-4 w-[48%]">
                                    <label className="block text-gray-700">ชื่อร้าน:</label>
                                    <input
                                        type="text"
                                        name="nameBarber"
                                        value={mybarber.nameBarber}
                                        onChange={handleupdateBarber}
                                        className="w-full p-2 border rounded-md"
                                    />
                                </div>
                                <div className="mb-4 w-[48%]">
                                    <label className="block text-gray-700">เบอร์โทร:</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={mybarber.phone}
                                        onChange={handleupdateBarber}
                                        className="w-full p-2 border rounded-md"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">เวลาทำการ:</label>
                                <input
                                    type="time"
                                    name="dateOpen"
                                    value={mybarber.dateOpen}
                                    onChange={handleupdateBarber}
                                    className="w-full p-2 border rounded-md"
                                />
                                <input
                                    type="time"
                                    name="dateClose"
                                    value={mybarber.dateClose}
                                    onChange={handleupdateBarber}
                                    className="w-full p-2 border rounded-md mt-2"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">ที่อยู่:</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={mybarber.address}
                                    onChange={handleupdateBarber}
                                    className="w-full p-2 border rounded-md"
                                />
                            </div>

                            <div className='w-[70%] flex  h-[100px]'>
                                <div className='w-[30%] mr-[20px]'>
                                    <p>Facebook</p>
                                    <input type="text" className='w-full p-2 border rounded-md' name="facebook" value={mybarber?.contact?.facebook} onChange={handleupdateBarber} />
                                </div>
                                <div className='w-[30%] mr-[20px]'>
                                    <p>Line</p>
                                    <input type="text" className='w-full p-2 border rounded-md' name="line" value={mybarber?.contact?.line} onChange={handleupdateBarber} />
                                </div>
                                <div className='w-[30%] mr-[20px]'>
                                    <p>Instagram</p>
                                    <input type="text" className='w-full p-2 border rounded-md' name="instagram" value={mybarber?.contact?.instagram} onChange={handleupdateBarber} />
                                </div>
                            </div>

                            <div className='flex justify-end'>
                                <button
                                    onClick={handlesubmitupdate}
                                    className="bg-green-500 text-white py-2 px-4 rounded mr-2"
                                >
                                    Save
                                </button>
                                <button
                                    // onClick={handleEditToggle}
                                    className="bg-red-500 text-white py-2 px-4 rounded"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>

                    }

                </div>
            </div>
        </div>
    );
}

export default CreateBarber;
