import styled from "styled-components";

const ReferencesContentDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(222, 135, 157);
    padding: 20px;
    text-align: center;
`;

type Reference = {
    name: string;
    position: string;
    contact: string; 
};

const professionalReferences: Reference[] = [
    { name: "Ms. Gomez", position: "Gomez & Palumbo Boss", contact: "978-433-1298" },
    { name: "Mr. Stevens", position: "Law Firm Colleague", contact: "978-766-3657" },
];

const personalReferences: Reference[] = [
    { name: "Asia Zaheen", position: "Mother", contact: "978-807-1935" },
    { name: "Ayyan Kamran", position: "Brother", contact: "978-394-7758" },
];

export default function References() {
    return (
        <ReferencesContentDiv>
            <h2>References</h2>

            <h3>Professional</h3>
            <table border="1" style={{ borderCollapse: "collapse", textAlign: "center", width: "80%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {professionalReferences.map((ref, index) => (
                        <tr key={index}>
                            <td>{ref.name}</td>
                            <td>{ref.position}</td>
                            <td>{ref.contact}</td>  
                        </tr>
                    ))}
                </tbody>
            </table>

            <h3>Personal</h3>
            <table border="1" style={{ borderCollapse: "collapse", textAlign: "center", width: "80%" }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Relation</th>
                        <th>Contact</th>
                    </tr>
                </thead>
                <tbody>
                    {personalReferences.map((ref, index) => (
                        <tr key={index}>
                            <td>{ref.name}</td>
                            <td>{ref.position}</td>
                            <td>{ref.contact}</td>  
                        </tr>
                    ))}
                </tbody>
            </table>
        </ReferencesContentDiv>
    );
}
