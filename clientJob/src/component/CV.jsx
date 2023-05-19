import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

// Create functional components for CV sections
const EducationSection = ({ education }) => (
  <View>
    <Text style={styles.sectionTitle}>Education</Text>
    
     
        <Text style={styles.itemTitle}>{education.degree}</Text>
        <Text>{education.institution}</Text>
        <Text>{education.year}</Text>
        <Text>{education.DegStatus}</Text>
      
    
  </View>
);

const WorkExperienceSection = ({ workExperience }) => (
  <View>
    <Text style={styles.sectionTitle}>Work Experience</Text>
    
      
        <Text style={styles.itemTitle}>{workExperience.position}</Text>
        <Text>{workExperience.company}</Text>
        <Text>{workExperience.duration}</Text>
      
   
  </View>
);

const SkillsSection = ({ skills }) => (
  <View>
    <Text style={styles.sectionTitle}>Skills</Text>
    <Text>{skills.join(', ')}</Text>
  </View>
);

const ContactSection = ({ contact }) => (
  <View>
    <Text style={styles.sectionTitle}>Contact</Text>
    <Text>Email: {contact.email}</Text>
    <Text>Phone: {contact.phone}</Text>
  </View>
);

// Create the CV component
const CV = ({ cvData }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>{cvData.name}</Text>
        <EducationSection education={cvData.education} />
        <WorkExperienceSection workExperience={cvData.workExperience} />
        <SkillsSection skills={cvData.skills} />
        <ContactSection contact={cvData.contact} />
      </View>
    </Page>
  </Document>
);

// Styling
const styles = StyleSheet.create({
  page: {
    fontFamily: 'Helvetica',
    backgroundColor: '#fff',
  },
  container: {
    margin: '10%',
    maxWidth: 600,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  itemContainer: {
    marginBottom: 10,
  },
  itemTitle: {
    fontWeight: 'bold',
  },
});

// Render the CV component and provide a download link
export const CV_data = ({ cvData }) => (
  <div>
    <PDFDownloadLink document={<CV cvData={cvData} />} fileName="cv.pdf">
      {({ blob, url, loading }) =>
        loading ? 'Generating PDF...' : <a href={url} target="_blank">Download PDF</a>
      }
    </PDFDownloadLink>
  </div>
);
