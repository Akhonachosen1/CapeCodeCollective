var createClient = require('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm');

// Database instance
const supabaseUrl = 'https://hiubxgddixpfwdmdiywt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpdWJ4Z2RkaXhwZndkbWRpeXd0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzOTgwNzQsImV4cCI6MjAzMTk3NDA3NH0.dwyc1QLqBUb6_zKLDQCSuo-ozntlcu9dL2e3djzudvo';
const supabase = createClient(supabaseUrl, supabaseKey);

// Database structure
const PARTIAL_SYNC = { email: "" };
const FULL_SYNC = {
    name: "",
    email: "",
    service: "",
    message: ""
};
const TRANSACTION_TYPES = {
    REQUEST_QOUTE: 'REQUEST_QOUTE',
    SIGN_UP: 'SIGN_UP',
    CONTACT: 'CONTACT'
};
const PAYLOAD_TYPES = {
    FULL_SYNC: 'PARTIAL_SYNC',
    PARTIAL_SYNC: 'FULL_SYNC'
};

console.log('Supabase Instance: ', supabase);