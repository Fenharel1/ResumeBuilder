export const generatePDF = (resumeData) => {
    const doc = new PDFDocument();
  
    // Pipe the PDF into a blob
    const stream = doc.pipe(blobStream());
  
    // Personal Information
    doc.fontSize(20).text('Personal Information');
    doc.fontSize(12).text(`Name: ${resumeData.personal.firstname} ${resumeData.personal.lastname}`);
    doc.text(`Profession: ${resumeData.personal.profession}`);
    doc.text(`Address: ${resumeData.personal.address}, ${resumeData.personal.city}, ${resumeData.personal.state} ${resumeData.personal.zipcode}`);
  
    // Education
    doc.fontSize(20).text('Education');
    resumeData.education.forEach((edu) => {
      doc.fontSize(12).text(`School: ${edu.school}`);
      doc.text(`Degree: ${edu.degree}`);
      doc.text(`Field of Study: ${edu.fieldOfStudy}`);
      doc.text(`Graduation Year: ${edu.graduationYear}`);
    });
  
    // Experience
    doc.fontSize(20).text('Experience');
    resumeData.experience.forEach((exp) => {
      doc.fontSize(12).text(`Company: ${exp.company}`);
      doc.text(`Position: ${exp.position}`);
      doc.text(`Start Date: ${exp.startDate}`);
      doc.text(`End Date: ${exp.endDate}`);
      doc.text(`Description: ${exp.description}`);
    });
  
    // Contact Information
    doc.fontSize(20).text('Contact Information');
    doc.fontSize(12).text(`Email: ${resumeData.contact.email}`);
    doc.text(`Phone: ${resumeData.contact.phone}`);
    doc.text(`LinkedIn: ${resumeData.contact.linkedIn}`);
  
    // Certificates
    doc.fontSize(20).text('Awards/Certifications');
    resumeData.certificates.forEach((cert) => {
      doc.fontSize(12).text(`Title: ${cert.title}`);
      doc.text(`Issuer: ${cert.issuer}`);
      doc.text(`Date: ${cert.date}`);
      doc.text(`Description: ${cert.description}`);
    });
  
    doc.end();
  
    // Create the blob and open it in a new window
    stream.on('finish', function() {
      const blob = stream.toBlob('application/pdf');
      const url = URL.createObjectURL(blob);
      window.open(url);
    });
  };
  