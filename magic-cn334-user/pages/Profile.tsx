import { Input } from '@nextui-org/react';
import { useState, useEffect } from 'react';


export default function ProfileForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        phone: '',
        city: '',
        district: '',
        subdistrict: '',
        postalCode: '',
        password: ''
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // Process form submission here
        // Example: console.log(formData);
    };

    const handleBack = () => {
        // Implement your logic for "Back" here
        console.log("Back button clicked");
    };
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).backgroundColor;
        document.body.style.backgroundColor = '#118DF0';
        document.body.style.color = 'white';

        return () => {
            document.body.style.backgroundColor = originalStyle;
            document.body.style.color = 'black';
        };
    }, []);

    return (
        <div className="container" style={{ width: '500px', margin: 'auto', color: 'white' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: '10px' }}>
                <button onClick={handleBack} style={{ marginBottom: '5px', background: 'none', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px' }}>&lt; Back</button>
                <h2 style={{ fontSize: '24px' }}>Edit Profile</h2>
            </div>
            <form id="editProfileForm" onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="form-group" style={{ width: '48%' }}>
                        <label htmlFor="firstName">ชื่อจริง</label>
                        <Input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
                    </div>
                    <div className="form-group" style={{ width: '48%' }}>
                        <label htmlFor="lastName">นามสกุล</label>
                        <Input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-group full">
                    <label htmlFor="email">Email</label>
                    <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="form-group full">
                    <label htmlFor="password">รหัสผ่าน</label>
                    <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                    <div style={{ cursor: 'pointer', marginTop: '5px' }}>
                        Change password?
                    </div>
                </div>

                <div className="form-group full">
                    <label htmlFor="address">ที่อยู่</label>
                    <Input id="address" name="address" value={formData.address} onChange={handleChange}/>
                </div>

                <div className="form-group full">
                    <label htmlFor="phone">เบอร์โทรศัพท์</label>
                    <Input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="form-group" style={{ width: '48%' }}>
                        <label htmlFor="city">จังหวัด</label>
                        <Input type="text" id="city" name="city" value={formData.city} onChange={handleChange} />
                    </div>
                    <div className="form-group" style={{ width: '48%' }}>
                        <label htmlFor="district">ตำบล</label>
                        <Input type="text" id="district" name="district" value={formData.district} onChange={handleChange} />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="form-group" style={{ width: '48%' }}>
                        <label htmlFor="subdistrict">อำเภอ</label>
                        <Input type="text" id="subdistrict" name="subdistrict" value={formData.subdistrict} onChange={handleChange} />
                    </div>
                    <div className="form-group" style={{ width: '48%' }}>
                        <label htmlFor="postalCode">รหัสไปรษณีย์</label>
                        <Input type="text" id="postalCode" name="postalCode" value={formData.postalCode} onChange={handleChange} />
                    </div>
                </div>

                <div className="form-actions" style={{ display: 'flex', justifyContent: 'right', gap: '10px' }}>
                    <button type="button" className="cancel-button" onClick={() => { /* handle cancel */ }} style={{ padding: '8px 20px', borderRadius: '5px', background: 'white', color : 'black', border: 'none' }}>Cancel</button>
                    <button type="submit" className="save-button" style={{ padding: '8px 20px', borderRadius: '5px', background: '#10439F', color: 'white', border: 'none' }}>Save</button>
                </div>
            </form>
        </div>
    );
}