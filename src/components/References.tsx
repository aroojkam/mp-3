import { styled } from 'styled-components';

const ReferencesContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(222, 135, 157);
    padding: 20px;
    text-align: left;
`;
export default function References() {
    return (
        <ReferencesContentDiv>
           <h2>References</h2>
            <ul>
            <li><strong> Ms. Zoila Gomez </strong> Gomez & Palumbo Boss (978-433-1298)</li>
            <li><strong> Mr. Stevens</strong> Law Firm Colleague (978-766-3657)</li>
            <li><strong>Asia Zaheen</strong> Mother (978-807-1935)</li>
            <li><strong>Ayyan Kamran</strong> Brother (978-394-7758)</li>
            </ul>
        </ReferencesContentDiv>
    )
}